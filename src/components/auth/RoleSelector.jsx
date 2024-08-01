export default function RoleSelector({ value, onChange }) {
    return (
      <select className="flex rounded-md justify-center text-black gap-x-1.5 my-2 bg-white hover:bg-white/80 px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)]" value={value} onChange={(e) => onChange(e.target.value)} required>
        <option className="block px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium" value="">Select Role</option>
        <option className="block px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium" value="influencer">Influencer</option>
        <option className="block px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium" value="brand">Brand</option>
      </select>
    );
  }