import buildClient from "../api/build-client";

export default function Index({ currentUser }) {
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>;
}

Index.getInitialProps = async (context) => {
  console.log("Landing page!!");
  const { data } = await buildClient(context).get("/api/users/currentuser");

  return data;
};
