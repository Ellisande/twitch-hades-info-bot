const sanitizeChannel = (channel: string) => channel?.replace(/^#/, "");

export { sanitizeChannel };
