import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";

export default function Home() {
  const [text, setText] = useState("");
  const [itemCreate, setItemCreate] = useState([]);
  return (
    <div>
      <Header
        text={text}
        setText={setText}
        itemCreate={itemCreate}
        setItemCreate={setItemCreate}
      />
      <List itemCreate={itemCreate}  setItemCreate={setItemCreate} />
      <Footer />
    </div>
  );
};
