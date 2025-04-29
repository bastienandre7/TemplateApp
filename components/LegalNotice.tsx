export default function LegalNotice() {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-8 mb-4">
        <a href="#english">
          <button className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 text-sm font-medium">
            🇬🇧 English Version
          </button>
        </a>
        <a href="#french">
          <button className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 text-sm font-medium">
            🇫🇷 Version Française
          </button>
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <section id="english">
          <h1 className="text-3xl font-bold mb-4">LEGAL NOTICE</h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated on April 14, 2025.
          </p>

          <p className="mb-4">
            In accordance with the provisions of Law No. 2004-575 of June 21,
            2004 on confidence in the digital economy, the identity of the
            various parties involved in the creation and maintenance of the
            BloomTPL website is provided to users.
          </p>

          <h2 className="text-2xl font-bold mb-4">Site Publisher</h2>

          <p className="mb-4">
            This website, accessible at www.bloomtpl.com, is published by:
            Bastien Andre, residing at 200 rue de la Croix Nivert, 75015 PARIS,
            of French nationality, born on 11/20/2003.
          </p>

          <p className="mb-4">
            Sole proprietorship registered with the Paris Trade and Companies
            Register (RCS) under number <strong>943 199 257</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4">Hosting</h2>

          <p className="mb-4">
            The website is hosted by Vercel, located at 440 N Barranca Ave Pmb
            4133, Covina, CA, 91723-1722, United States (contact via
            https://vercel.com/help).
          </p>

          <h2 className="text-2xl font-bold mb-4">Publication Director</h2>

          <p className="mb-4">
            The publication director of the website is Bastien Andre.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact</h2>

          <p>Phone: +33615682296</p>

          <p>Email: bloomtpl@gmail.com</p>

          <p className="mb-4">
            Mailing address: 200 rue de la Croix Nivert, 75015 PARIS
          </p>

          <h2 className="text-2xl font-bold mb-4">Personal Data</h2>

          <p className="mb-16">
            The processing of your personal data is governed by our Privacy
            Policy, available under the section &quot;Personal Data Protection
            Charter&quot;, in accordance with Regulation (EU) 2016/679 of April
            27, 2016 (GDPR).
          </p>
        </section>

        <section id="french">
          <h1 className="text-3xl font-bold mb-4">MENTIONS LÉGALES</h1>
          <p className="text-sm text-gray-500 mb-8">
            Dernière mise à jour le 14 avril 2025.
          </p>

          <p className="mb-4">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l&apos;économie numérique, il est précisé aux
            utilisateurs du site BloomTPL l&apos;identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <h2 className="text-2xl font-bold mb-4">Edition du site</h2>

          <p className="mb-4">
            Le présent site, accessible à l’URL www.bloomtpl.com, est édité par
            : Bastien Andre, résidant 200 rue de la Croix Nivert 75015 PARIS, de
            nationalité Française (France), né(e) le 20/11/2003.
          </p>

          <p className="mb-4">
            Micro-entreprise immatriculée au Registre du Commerce et des
            Sociétés (RCS) de Paris sous le numéro <strong>943 199 257</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4">Hébergement</h2>

          <p className="mb-4">
            Le Site est hébergé par la société Vercel, situé 440 N Barranca Ave
            Pmb 4133 Covina, CA, 91723-1722 United States, (contact via
            https://vercel.com/help).
          </p>

          <h2 className="text-2xl font-bold mb-4">Directeur de publication</h2>

          <p className="mb-4">
            Le Directeur de la publication du Site est Bastien Andre.
          </p>

          <h2 className="text-2xl font-bold mb-4">Directeur de publication</h2>

          <p>Par téléphone : +33615682296</p>

          <p>Par email : bloomtpl@gmail.com</p>

          <p className="mb-4">
            Par courrier : 200 rue de la Croix Nivert 75015 PARIS
          </p>

          <h2 className="text-2xl font-bold mb-4">Données personnelles</h2>

          <p className="mb-4">
            Le traitement de vos données à caractère personnel est régi par
            notre Charte du respect de la vie privée, disponible depuis la
            section &quot;Charte de Protection des Données Personnelles&quot;,
            conformément au Règlement Général sur la Protection des Données
            2016/679 du 27 avril 2016 («RGPD»).
          </p>
        </section>
      </div>
    </div>
  );
}
