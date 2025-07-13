function redirectionUrl(language: string): string {
  let baseUrl = "www.example.org/";
  switch (language) {
    case "Japanese":
      baseUrl += "ja";
      break;
    case "English":
      baseUrl += "en";
      break;
    case "Spanish":
      baseUrl += "es";
      break;
    case "Russian":
      baseUrl += "ru";
      break;
    default:
      baseUrl += "";
  }
  return baseUrl;
}
