import SwaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
  const options = {
    customsCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Feedback site",
  };

  const swaggerDocument = YAML.load("./src/config/swagger.yaml");
  return [SwaggerUi.serve, SwaggerUi.setup(swaggerDocument, options)];
};

export default swaggerMiddleware;
