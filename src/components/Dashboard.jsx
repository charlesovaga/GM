export default function Dashboard() {
    return (
      <div className="p-6">
        <div className="text-center font-bold text-lg mb-4">MGMT Intro Task 1</div>
  
        <div className="grid grid-cols-5 gap-4 bg-white shadow rounded-lg p-4">
          {/* Left Panel - Submissions */}
          <div className="col-span-1 border-r pr-2">
            <p className="font-semibold mb-2">No of Submissions: 2</p>
            <ul className="text-sm">
              <li className="bg-gray-100 px-2 py-1 mb-1 rounded">Student1_submission_report</li>
              <li className="px-2 py-1">Student2_submission_report</li>
            </ul>
          </div>
  
          {/* Middle Panel - Report */}
          <div className="col-span-2 border-r px-2">
            <div className="mb-4 text-sm">
              <p>Average score: 55%</p>
              <p>Minimum score: 55%</p>
              <p>Maximum score: 55%</p>
            </div>
            <div className="h-40 border flex items-center justify-center text-red-500 text-sm">
              Preview report shows here. Deductions in RED
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Write your adjustment comments here."
                maxLength={500}
                className="w-full border rounded p-2 text-sm"
                rows={3}
              />
              <p className="text-xs text-gray-400 mt-1">500 characters max</p>
              <button className="mt-2 px-3 py-1 bg-gray-300 text-sm rounded">Regenerate Report</button>
            </div>
          </div>
  
          {/* Right Panel - Score & Feedback */}
          <div className="col-span-2 px-2">
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-sm">Score:</p>
              <input
                type="number"
                defaultValue={55}
                className="w-16 border rounded p-1 text-sm text-center"
              />
              <span className="text-xs text-gray-500">(Score is editable)</span>
            </div>
            <div className="border h-32 flex items-center justify-center text-sm text-gray-500">
              Final feedback shows here
            </div>
            <div className="mt-4 flex justify-end">
              <button className="px-3 py-1 bg-gray-300 text-sm rounded">Approve Feedback</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  