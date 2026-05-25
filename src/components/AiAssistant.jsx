import { useMemo, useState } from "react";

const quickSuggestions = [
  "Quero saber sobre implantes",
  "Quero saber sobre lentes de contato",
  "Quero agendar uma avaliação",
  "Tenho dúvida sobre harmonização orofacial",
];

const initialMessages = [
  {
    role: "assistant",
    text: "Olá! Posso te ajudar a entender os tratamentos ou agendar uma avaliação.",
  },
];

const businessHours =
  "Os horários de atendimento são: segunda-feira das 08:00 às 11:30 e das 13:30 às 18:30; terça-feira das 08:00 às 11:30 e das 13:30 às 18:30; quarta-feira das 08:00 às 11:30; quinta-feira das 13:30 às 18:30; sexta-feira das 08:00 às 11:30 e das 13:30 às 18:30. Sábado e domingo fechado.";

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getLocalReply(text) {
  const normalized = normalizeText(text);

  if (
    normalized.includes("horario") ||
    normalized.includes("atendimento") ||
    normalized.includes("funciona") ||
    normalized.includes("abre") ||
    normalized.includes("expediente")
  ) {
    return businessHours;
  }

  if (normalized.includes("email") || normalized.includes("e-mail")) {
    return "A clínica ainda não disponibilizou e-mail de atendimento no site. Para contato, o caminho indicado por enquanto é o WhatsApp.";
  }

  return "";
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      "Olá, vim pelo site Odonto Levek e gostaria de agendar uma avaliação.",
    );
    return `https://wa.me/554130186662?text=${text}`;
  }, []);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    setInput("");
    setIsLoading(true);

    const localReply = getLocalReply(trimmed);
    if (localReply) {
      setMessages((current) => [...current, { role: "assistant", text: localReply }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/chat.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            data.reply ||
            "Não consegui responder agora. Você pode chamar a clínica pelo WhatsApp para continuar.",
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "O assistente está indisponível no momento. Para atendimento, chame pelo WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="ai-assistant">
      <button
        className="ai-float"
        type="button"
        aria-label={isOpen ? "Fechar assistente" : "Abrir assistente Odonto Levek"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span>IA</span>
      </button>

      {isOpen && (
        <section className="ai-panel" aria-label="Assistente Odonto Levek">
          <header>
            <div>
              <strong>Assistente Odonto Levek</strong>
              <span>Atendimento inicial</span>
            </div>
            <button type="button" aria-label="Fechar assistente" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </header>

          <div className="ai-messages" role="log" aria-live="polite">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`ai-message ai-message-${message.role}`}>
                {message.text}
              </p>
            ))}
            {isLoading && <p className="ai-message ai-message-assistant">Digitando...</p>}
          </div>

          <div className="ai-suggestions">
            {quickSuggestions.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>

          <form className="ai-form" onSubmit={handleSubmit}>
            <label htmlFor="ai-message">Mensagem</label>
            <div>
              <input
                id="ai-message"
                value={input}
                maxLength={500}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Digite sua dúvida"
              />
              <button type="submit" disabled={isLoading}>
                Enviar
              </button>
            </div>
          </form>

          <a className="ai-whatsapp" href={whatsappHref} target="_blank" rel="noopener">
            Agendar pelo WhatsApp
          </a>
          <small>Este assistente não substitui avaliação odontológica.</small>
        </section>
      )}
    </div>
  );
}
