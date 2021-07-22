const TranslationList = (props) => {
  const { translations } = props;

  return (
    <div>
      <h2>TRANSLATION LIST</h2>
      {translations.map((translation) => {
        return <div>{translation.trans_text}</div>;
      })}
    </div>
  );
};

export default TranslationList;
