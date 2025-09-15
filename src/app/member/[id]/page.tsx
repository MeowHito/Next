export default function MemberPage(parameters: { params: { id: string } }) {
    
  const { id } = parameters.params;
  return (
    <>
      <h1>Member Page {id}</h1>
      <p>This is the detail page for member with ID: {id}</p>
    </>
  );
}