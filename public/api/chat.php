<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['reply' => 'Método não permitido.']);
  exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);
$message = trim((string)($payload['message'] ?? ''));

if ($message === '' || mb_strlen($message) > 500) {
  http_response_code(400);
  echo json_encode(['reply' => 'Envie uma mensagem curta para que eu possa ajudar.']);
  exit;
}

$blockedTerms = ['ignore previous', 'system prompt', 'chave api', 'api key', 'senha'];
foreach ($blockedTerms as $term) {
  if (stripos($message, $term) !== false) {
    http_response_code(400);
    echo json_encode(['reply' => 'Posso ajudar com dúvidas gerais sobre tratamentos e agendamento.']);
    exit;
  }
}

$apiKey = getenv('OPENAI_API_KEY') ?: '';
$model = getenv('OPENAI_MODEL') ?: 'gpt-5.4-mini';

$localConfigPath = __DIR__ . '/config.php';
if ($apiKey === '' && file_exists($localConfigPath)) {
  $localConfig = require $localConfigPath;
  $apiKey = (string)($localConfig['OPENAI_API_KEY'] ?? '');
  $model = (string)($localConfig['OPENAI_MODEL'] ?? $model);
}

if ($apiKey === '') {
  http_response_code(503);
  echo json_encode([
    'reply' => 'O assistente ainda não foi configurado no servidor. Você pode chamar a clínica pelo WhatsApp.',
  ]);
  exit;
}

$systemPrompt = <<<PROMPT
Você é o Assistente Odonto Levek, um assistente virtual de atendimento inicial de uma clínica odontológica. Você responde em português brasileiro, com tom acolhedor, claro e profissional. Você pode explicar de forma geral tratamentos como implantes, próteses, cirurgia odontológica, lentes de contato dental, aparelhos ortodônticos, harmonização orofacial, Botox, preenchimento, bichectomia e endodontia. Você não faz diagnóstico, não promete resultados, não define tratamento e não substitui consulta com cirurgião-dentista. Quando necessário, oriente o paciente a agendar avaliação presencial. Se houver urgência, dor intensa, trauma, sangramento, febre, inchaço importante ou sinais de infecção, oriente procurar atendimento odontológico imediatamente. Seja breve, útil e finalize oferecendo ajuda para agendar pelo WhatsApp.
HorÃ¡rios de atendimento da clÃ­nica: segunda-feira das 08:00 Ã s 11:30 e das 13:30 Ã s 18:30; terÃ§a-feira das 08:00 Ã s 11:30 e das 13:30 Ã s 18:30; quarta-feira das 08:00 Ã s 11:30; quinta-feira das 13:30 Ã s 18:30; sexta-feira das 08:00 Ã s 11:30 e das 13:30 Ã s 18:30; sÃ¡bado fechado; domingo fechado. Se perguntarem por e-mail, informe que a clÃ­nica ainda nÃ£o disponibilizou e-mail de atendimento no site.
PROMPT;

$requestBody = [
  'model' => $model,
  'instructions' => $systemPrompt,
  'input' => $message,
  'max_output_tokens' => 260,
  'store' => false,
];

$ch = curl_init('https://api.openai.com/v1/responses');
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey,
  ],
  CURLOPT_POSTFIELDS => json_encode($requestBody),
  CURLOPT_TIMEOUT => 25,
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false || $curlError !== '' || $statusCode >= 400) {
  http_response_code(502);
  echo json_encode([
    'reply' => 'Não consegui responder agora. Para continuar, chame a Odonto Levek pelo WhatsApp.',
  ]);
  exit;
}

$data = json_decode($response, true);
$reply = '';

foreach (($data['output'] ?? []) as $item) {
  foreach (($item['content'] ?? []) as $content) {
    if (($content['type'] ?? '') === 'output_text' && !empty($content['text'])) {
      $reply .= $content['text'];
    }
  }
}

if ($reply === '') {
  $reply = 'Posso ajudar com informações gerais e orientar o agendamento de uma avaliação presencial.';
}

echo json_encode(['reply' => $reply], JSON_UNESCAPED_UNICODE);
