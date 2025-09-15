export default function MemberPage(parameters: { params: { id: string } }) {

  const { id } = parameters.params;
  return (
    <>
      <h1 className="font-bold text-green-400 text-2xl ">Member Page {id}</h1>
    </>
  );
}