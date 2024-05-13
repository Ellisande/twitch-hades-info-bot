const sanitizeChannel = (channel) => channel?.replace(/^#/, "");

module.exports = { sanitizeChannel };
