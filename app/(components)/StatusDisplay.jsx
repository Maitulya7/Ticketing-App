const StatusDisplay = ({ status }) => {
  let statusColor = '';
  let textColor = ''

  if (status === 'Not Started') {
    statusColor = '#FFC0CB'; 
  } else if (status === 'Started') {
    statusColor = '#FFA500';
  } else {
    statusColor = '#008000'; 
    textColor = '#fff'
  }

  return (
    <span className='inline-block w-24 text-center rounded-lg px-2 py-1 text-xs font-bold text-gray-800' style={{ backgroundColor: statusColor , color:textColor }}>
      {status}
    </span>
  );
};

export default StatusDisplay;
