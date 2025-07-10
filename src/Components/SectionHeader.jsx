export function SectionHeader({ name }) {
  return (
    <hgroup className="flex items-center gap-7">
      <h2 className="section-header">{name}</h2>
      <div className="header-hr"></div>
    </hgroup>
  );
}
