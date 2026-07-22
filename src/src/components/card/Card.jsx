export default function Card({ title, extra, children, url }) {
  const linkIcon = <i className="bi bi-box-arrow-up-right text-xs align-middle"></i>;
  const cardTitle = <span className="font-bold">{title} {url && linkIcon}</span>;
  const cardExtra = <span className="text-gray-400 font-thin">{extra}</span>;
  
  return (
    <a href={url}
      target="blank"
      className={`font-[Geom] border border-gray-300 rounded-lg px-6 py-4 sm:w-100 md:w-125 lg:w-150 ${url && "hover:bg-gray-100 duration-100"}`}
    >
      {cardTitle} {extra && cardExtra}
      <p>{children}</p>
    </a>
  );
}