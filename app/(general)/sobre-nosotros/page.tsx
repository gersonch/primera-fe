import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 p-4">
      {/* Imagen */}
      <div className="relative w-full md:w-1/2 aspect-w-16 aspect-h-9">
        <Image
          src="/images/img-nobg.png"
          alt="Quienes Somos"
          fill
          className="object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 my-4 p-6">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          ¿Quiénes Somos?
        </h2>
        <p className="font-semibold text-black/80 leading-relaxed">
          <span className="text-xl text-cyan-600">Lorem</span> ipsum dolor sit
          amet, consectetur adipiscing elit. Quisque accumsan est nec lorem
          pellentesque, sagittis tempor magna ullamcorper. Nulla facilisi.
          <br />
          <br />
          Maecenas a sapien ac enim finibus vehicula. Cras ipsum metus,
          facilisis accumsan magna feugiat, lacinia placerat risus. Vivamus ut
          augue vel felis tempor porttitor id quis felis. In ut dignissim ante,
          sed hendrerit mi.
          <br />
          <br />
          Praesent ut tellus consectetur, mollis elit vitae, ullamcorper nisi.
          Aliquam vel tellus neque. Nullam lorem sem, interdum ac erat maximus,
          pretium egestas orci. Sed vestibulum tincidunt malesuada.
          <br />
          <br />
          Nullam sit amet facilisis massa. Nulla eu tempor arcu. Duis blandit
          est ut blandit accumsan.
        </p>
      </div>
    </section>
  );
}
