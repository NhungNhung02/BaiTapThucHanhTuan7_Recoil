import { useRecoilValue } from "recoil";
import { countState } from "./counterState";

export default function Display() {
  const count = useRecoilValue(countState);

  return <h2>Count: {count}</h2>;
}