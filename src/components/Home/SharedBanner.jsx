
const SharedBanner = ({heading,subheading,img}) => {
  return (
    <div
      className="relative h-80.5 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      {/* Dark Overlay Box */}
      <div className="bg-slate-500/40 text-white text-center px-20 py-16">
        <h2 className="text-4xl uppercase mb-4 tracking-widest">
          {heading}
        </h2>
        <p className="max-w-2xl mx-auto text-sm">
          {subheading}
       
        </p>
      </div>
    </div>
  )
}

export default SharedBanner