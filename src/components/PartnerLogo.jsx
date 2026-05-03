export default function PartnerLogo({ partner }) {
  if (partner.image) {
    return (
      <div className="flex h-16 w-full items-center justify-center px-4">
        <img
          src={partner.image}
          alt={partner.label}
          className="max-h-12 w-auto opacity-90 transition group-hover:opacity-100 dark:brightness-110"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="flex h-16 w-full items-center justify-center px-4">
      <div className="font-display text-xl font-bold tracking-[0.18em] text-royal-700 transition group-hover:text-royal-500 dark:text-cyanblue-400 dark:group-hover:text-cyanblue-400">
        {partner.monogram}
      </div>
    </div>
  );
}
