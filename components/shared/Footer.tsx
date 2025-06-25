const Footer = () => {
  return (
    // footer 높이를 변경할 때는 Layout.tsx의 main 태그의 pb와 동일하도록 수정하기
    <footer
      className="absolute bottom-0 left-0 sm:px-6 md:px-20 lg:px-28 xl:px-36 w-full h-fit pb-4 bg-white "
      id="footer"
    >
      <hr />
      <div
        className="pt-4 w-full h-full max-w-7xl text-xs mx-auto"
        id="footer__container"
      >
        <span
          className="md:px-0 px-3 flex flex-col gap-2 sm:gap-1 text-gray-600"
          id="footer__main"
        >
          <p id="footer__info-developer">개발자: cbfmark@gmail.com</p>
          <p id="footer__info-github">
            깃허브:{" "}
            <a href="https://github.com/LazyMG/f1-information">
              https://github.com/LazyMG/f1-information
            </a>
          </p>
          <p id="footer__info-api-right">
            API 출처:{" "}
            <a href="https://ergast.com/mrd/">https://ergast.com/mrd/</a>
          </p>
          <p id="footer__info-img-right">
            이미지 원본 출처:{" "}
            <a href="https://www.formula1.com/">https://www.formula1.com/</a>
          </p>
          <p id="footer__info-description">
            안내: 비상업용 웹페이지이므로 저작권 및 문제 발생 시 접속이 불가할
            수 있습니다.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
