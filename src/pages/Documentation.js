import Base from "../components/Base";

const Documentation = () => {
  return (
    <Base>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <iframe
          width="1080"
          height="720"
          src="http://localhost:8080/swagger-ui/index.html"
        ></iframe>
      </div>
    </Base>
  );
};

export default Documentation;
