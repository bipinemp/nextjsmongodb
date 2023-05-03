import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "70vh" }}>
      <div>
        <h1>404</h1>
        <h2 style={{ color: "red" }}>Not Found :(</h2>
        <p>Could not find requested page.</p>
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
