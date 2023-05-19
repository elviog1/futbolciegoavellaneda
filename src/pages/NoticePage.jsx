import axios from "axios";
import React, { useEffect, useState } from "react";
import Notice from "../components/Notice";
import Loading from "../components/Loading";
import NoticeNew from "../components/NoticeNew";

export default function NoticePage() {
  const [notices, setNotice] = useState([]);
  const [activeNewNotice, setActiveNewNotice] = useState(false);
  const api = "https://futbolciegoavellaneda.onrender.com/notices";
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setNotice(res.data.response))
      .catch((e) => console.log(e));
  }, []);

  const handleNewNotice = () => {
    setActiveNewNotice(!activeNewNotice);
  };

  const handlePostNotice = (newNotice) => {
    setNotice([...notices, newNotice]);
  };

  const noticiasPorSeccion = 5; // Define el número de noticias por sección

  const [seccionActual, setSeccionActual] = useState(1);

  const totalSecciones = Math.ceil(notices.length / noticiasPorSeccion); // cantidad de noticias dividido noticias secciones

  const cambiarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <div className="bg-gray-800 flex justify-center">
      <div className="w-100 px-5 min-h-screen">
        <div className="flex justify-center gap-4">
          <h2 className=" text-4xl font-bold text-gray-300">Noticias</h2>
          {/* boton para administrador - agregar noticia a la pagina */}
          {user && (
            <button
            className="px-4 border rounded duration-300 hover:bg-gray-700 text-white text-2xl font-bold"
            onClick={handleNewNotice}
            >
              {activeNewNotice ? "-" : "+"}
            </button>
          )}
          {/* boton para administrador - agregar noticia a la pagina */}

        </div>

        {/* muestra formulario para crear una noticia - administrador */}
        {activeNewNotice && <NoticeNew handlePostNotice={handlePostNotice} />}
        {/* muestra formulario para crear una noticia - administrador */}

          {/* si hay noticias..... mostra, sino, LOADING */}
        {notices.length > 0 ? (
          <div>
            <Notice
              notice={notices}
              noticiasPorSeccion={noticiasPorSeccion}
              seccionActual={seccionActual}
            />

            {/* Renderiza los botones de paginado */}
            <div className="flex justify-center gap-5 text-gray-300 font-bold mt-3 text-2xl">
              {Array.from({ length: totalSecciones }, (_, index) => (
                <button
                key={index + 1}
                onClick={() => cambiarSeccion(index + 1)}
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  {index + 1}
                </button>
              ))}
            </div>
              {/* Renderiza los botones de paginado */}
          </div>
        ) : (
          <div className="flex h-96 justify-center items-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
