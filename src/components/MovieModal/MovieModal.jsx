import React, { useRef, useEffect } from "react";
import {
  ModalContainer,
  Modal,
  ModalCloseBtn,
  ModalPosterImg,
  ModalContent,
  ModalDetail,
  ModalUserPerc,
  ModalTitle,
  ModalOverview,
} from "./Styled";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <ModalContainer>
      <Modal ref={modalRef}>
        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
        <ModalPosterImg
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="modal__poster-img"
        />
        <ModalContent>
          <ModalDetail>
            <ModalUserPerc>100% for you</ModalUserPerc>
            {release_date ? release_date : first_air_date}
          </ModalDetail>
          <ModalTitle>{title ? title : name}</ModalTitle>
          <ModalOverview>평점 : {vote_average}</ModalOverview>
          <ModalOverview>{overview}</ModalOverview>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
