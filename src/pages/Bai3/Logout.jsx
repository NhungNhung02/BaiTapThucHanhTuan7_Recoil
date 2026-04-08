import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/userState";

export default function Logout() {
  const setUser = useSetRecoilState(userState);

  return <button style={{ fontSize: "26px", borderRadius: "5px", color: "orange" }} onClick={() => setUser(null)}>Logout</button>;
}
