export default function FormField({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-[#0E2258]">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-slate-300
          focus:outline-none
          focus:border-[#0F9AC5]
        "
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
