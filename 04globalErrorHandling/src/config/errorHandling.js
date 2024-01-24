export default function errorHandling(response) {
  switch (response.status || response.cod) {
    case 400:
      return "Bad request. Please check your input.";

    case 401:
      return "Unauthorized. Please log in.";

    case 403:
      return "Forbidden. You do not have permission to access this resource.";

    case 404:
      return "Not found. The requested resource does not exist.";

    case 500:
      return "Internal server error. Please try again later.";

    default:
      return "An unexpected error occurred. Please try again.";
    // return "An error occurred. Please try again.";
  }
}
