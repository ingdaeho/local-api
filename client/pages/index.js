import MsgList from "../components/MsgLIst";
import { fetcher } from "../queryClient.js";
import { GET_MESSAGES } from "../graphql/message.js";
import { GET_USERS } from "../graphql/user";

const Home = ({ smsgs, users }) => {
  return (
    <>
      <h1>SIMPLE SNS</h1>
      <MsgList smsgs={smsgs} users={users} />
    </>
  );
};

export const getServerSideProps = async () => {
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  const { users } = await fetcher(GET_USERS);

  return {
    props: { smsgs, users },
  };
};

export default Home;
