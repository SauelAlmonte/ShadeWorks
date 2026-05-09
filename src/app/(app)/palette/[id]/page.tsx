interface Props {
  params: Promise<{ id: string }>;
}

export default async function PalettePage({ params }: Props) {
  const { id } = await params;
  return <div>Palette {id}</div>;
}
