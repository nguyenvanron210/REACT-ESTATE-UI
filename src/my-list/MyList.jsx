import Card from "../components/card/Card";
import { listData } from "../lib/MyData";
import "./MyList.scss";

function MyList() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default MyList;
