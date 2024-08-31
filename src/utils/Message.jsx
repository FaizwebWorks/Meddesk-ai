const Message = ({ name, text }) => {
  return (
    <div className="mb-4">
      <strong>{name}:</strong>
      <p className="ml-2 inline-block">{text}</p>
    </div>
  );
};

export default Message;
