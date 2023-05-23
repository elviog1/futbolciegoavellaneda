import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TwitterShareButton } from "react-share";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Notice({ notice, noticiasPorSeccion, seccionActual }) {
  const [notices, setNotices] = useState([...notice].reverse());
  const api = "https://futbolciegoavellaneda.onrender.com/notices";
  const user = JSON.parse(localStorage.getItem("user"));
  const startIndex = (seccionActual - 1) * noticiasPorSeccion;
  const endIndex = startIndex + noticiasPorSeccion;

  // Filtra las noticias según el índice de inicio y fin
  const noticiasSeccion = notices.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    axios
      .delete(api + `/${id}`)
      .then(() => {
        setNotices((prevNotices) =>
          prevNotices.filter((notice) => notice._id !== id)
        );
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setNotices([...notice].reverse());
  }, [notice]);

  const printNotice = (notice) => (
    <div
      className="mt-4 p-2 border-2 rounded border-slate-600 hover:bg-slate-700  duration-300  flex justi flex-col sm:flex-row text-slate-300"
      key={notice.title}
    >
      <img
        className="sm:w-72 rounded mb-4 sm:mb-0 sm:mr-4"
        src={notice.images}
        alt="imagen"
      />

      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl mb-2 font-bold">{notice.title}</h2>
          <p className="mb-4">{notice.notice}</p>
          <div className="flex justify-between">
            <span>{notice.date}</span>
          </div>
          <div className="">
            {user && (
              <div className="flex justify-between">
                <div className="flex">
                  <TwitterShareButton
                    url={"https://futbolciegoavellaneda.vercel.app/"}
                    title={`¡Nueva Noticia ! \n${notice.title}\nClick aqui: 👉 `}
                  >
                    <AiOutlineTwitter className="text-5xl text-sky-400 hover:text-sky-600 duration-300" />
                  </TwitterShareButton>
                </div>
                <button
                  className="text-5xl text-orange-700 hover:text-red-800 duration-300"
                  onClick={() => handleDelete(notice._id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      {noticiasSeccion.map(printNotice)}
    </div>
  );
}
