import type { PartyInvolved } from "@/types/report";

interface PartyTableItemProps {
  partyInvolved: PartyInvolved;
}

export default function PartyTableItem({ partyInvolved }: PartyTableItemProps) {
  return (
    <table className="w-full">
      <tbody>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            First Name
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.firstName}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Last Name
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.lastName}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Age
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.age}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Gender
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.gender}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Men
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.menNumber}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Women
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.womenNumber}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Children 0-4
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.children04}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Children 5-10
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.children510}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Children 10-15
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.children1015}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Vehicle Name
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.vehicleId}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Make
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.vehicleId}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Model
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.vehicleId}
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            Trim
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {partyInvolved.vehicleId}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
