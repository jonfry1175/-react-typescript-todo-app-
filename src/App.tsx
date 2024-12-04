import React from "react";
import CardtTask, { CardTaskProps } from "./components/CardTask";
import Header from "./components/Header";

const App: React.FC = () => {
  const data: Omit<CardTaskProps, "handleClick">[] = [
    {
      title: "title",
      description: "description",
      body: "body",
    },
    {
      title: "title",
      description: "description",
      body: "body",
    },
    {
      title: "title",
      description: "description",
      body: "body",
    },
  ];

  const handleChangeStatusTask = (action: "undo" | "done"): void => {
    if (action === "undo") {
      // eslint-disable-next-line no-console
      console.error("undo");
    } else {
      // eslint-disable-next-line no-console
      console.error("done");
    }
  };
  return (
    <div className="h-screen">
      <Header />
      {data.length > 0 &&
        data.map((data, index) => (
          <CardtTask
            key={index}
            title={data.title}
            description={data.description}
            body={data.body}
            handleClick={handleChangeStatusTask}
          />
        ))}
    </div>
  );
};

export default App;
