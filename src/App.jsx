import { useState } from "react";

import Counter from "./tasks/1-Counter";
import ChangeBackground from "./tasks/2-ChangeBackground";
import TodoList from "./tasks/3-TodoList";
import Timer from "./tasks/4-Timer";
import FilterList from "./tasks/5-FilterList";
import ImageGallery from "./tasks/6-ImageGallery";
import TimerWithAlert from "./tasks/7-TimerWithAlert";



export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Contador", component: <Counter /> },
    { title: "Mudar cor de Fundo", component: <ChangeBackground /> },
    { title: "Todo List", component: <TodoList /> },
    { title: "Temporizador", component: <Timer /> },
    { title: "Filtro de Lista", component: <FilterList /> },
    { title: "Galeria de Imagens", component: <ImageGallery /> },
    { title: "Timer com Alerta", component: <TimerWithAlert /> },
];

return (
  <div className="m-40 mx-64 font-Poppins">
    
    <div className="text-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-800 pb-5">Atividade 07</h1>
      <h4 className=" ">Selecione uma Aba:</h4>
    </div>

    <div className="flex justify-center space-x-6 my-10">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`p-2 rounded-xl transition-colors duration-300 ${activeTab === index ? "bg-blue-300" : "bg-blue-600 text-white"}`}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="flex justify-center border-2 border-gray-300 bg-gray-50 p-8">
      {tabs[activeTab].component}
    </div>
  </div>
)}