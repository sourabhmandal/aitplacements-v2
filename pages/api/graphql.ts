import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro/dist/ApolloServer";
import { buildSchema } from "type-graphql";
import { NextApiRequest, NextApiResponse } from "next";
import { UserResolver } from "../../graphql/users/user.resolver";
import Cors from "micro-cors";
const cors = Cors();

const schema = await buildSchema({
  resolvers: [UserResolver],
});
const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default cors(async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
});
