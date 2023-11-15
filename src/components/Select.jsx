const Select = ({ value, onChangeValue }) => {
  return (
    <select value={value} onChange={e => onChangeValue(e.target.value)} className='p-3'>
      <option value='all'>All</option>
      <option value='done'>Done</option>
      <option value='undone'>Undone</option>
    </select>
  );
};

export default Select;
