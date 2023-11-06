const dateGenerators = {
  getCurrentTimestamp: function (): string {
    const currentTimestamp = new Date();

    // Format the current timestamp as an ISO 8601 string (e.g., "2023-11-06T14:30:00Z")
    const iso8601Timestamp = currentTimestamp.toISOString();

    return iso8601Timestamp;
  },
};


export {dateGenerators}