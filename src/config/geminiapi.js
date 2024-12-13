async function runChat(query, page) {
  const API_BASE_URL = "http://18.212.202.77:8050/users";

  // Determine the endpoint based on the page prop that will be passed out with function along with query then corresponding endpoint will be selected and request will be sent to that endpoint
  let endpoint;
  switch (page) {
    case "text":
      endpoint = `${API_BASE_URL}/text`;
      break;
    case "summary":
      endpoint = `${API_BASE_URL}/summarizer`;
      break;
    case "images":
      endpoint = `${API_BASE_URL}/images`;
      break;
    case "memes":
      endpoint = `${API_BASE_URL}/memes`;
      break;
    case "videos":
      endpoint = `${API_BASE_URL}/video`; 
      break;
    default:
      throw new Error("Invalid page type error");
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }), // Send the query in the body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data || "No response from server"; 
  } catch (error) {
    console.error("Error in runChat:", error);
    throw error;
  }
}
export default runChat

