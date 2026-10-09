import { PLANS } from "@/lib/constants";

export default function PlanSelector({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-[#0E2258]">
        Choose a Plan
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-slate-300
        "
      >
        {PLANS.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name} - {plan.displayPrice}
          </option>
        ))}
      </select>
    </div>
  );
}
