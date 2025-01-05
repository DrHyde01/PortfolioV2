import Hero from '../components/hero';

export default function NotFound() {
  return (
    <main>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="realtive h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl flex items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          title="404"
          subtitle="⚠️ La page que vous cherchez n'existe
                    pas ou a été déplacée."
          CTA={{ text: "Retour à l'accueil", url: '/' }}
        />
      </div>
    </main>
  );
}