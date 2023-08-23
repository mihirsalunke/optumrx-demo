import { A } from '@solidjs/router';

const MedicationList = () => {
  return (
    <div>
      <h1>Medication List</h1>
      <div class="flex justify-center w-full">
        <A href="/add-sdes" class="text-white bg-blue-700 p-2 rounded hover:text-blue-300">Add SDEs</A>
      </div>
    </div>
  );
};
  
export default MedicationList;