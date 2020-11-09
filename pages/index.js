import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        margin: 30,
      }}
    >
      <h3>Examples:</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {[
          "hooks",
          "hooks_array",
          "hooks_effect",
          "hooks_memo",
          "http_request",
          "http_request_post",
          "http_request_swr",
          "http_request_list",
        ].map((name) => {
          return (
            <Link href={`/${name}`}>
              <a
                style={{
                  padding: 10,
                  backgroundColor: "#ffdcd8",
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                {name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
