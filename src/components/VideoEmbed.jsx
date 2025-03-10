function VideoEmbed() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="video">
      <div className="max-w-7xl pb-10 mx-auto text-center text-balance">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Assista ao vídeo e descubra a{" "}
          <span className="text-[#07AFFF] font-bold">experiência fixLy</span>{" "}
        </h2>
        <div className="flex justify-center items-center mt-10">
          <iframe
            className="w-full max-w-2xl h-64 md:h-96"
            src="https://player.vimeo.com/video/1053925225?h=4acad55aac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Vídeo"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoEmbed;
