const stats = [
    { name: 'C', stat: '65%' },
    { name: 'HTML', stat: '75%' },
    { name: 'CSS', stat: '65%' },
    { name: 'React', stat: '40%' },
    { name: 'Overleaf', stat: '40%' },
    { name: 'Git', stat: '40%' },
    { name: 'JavaScript', stat: '45%' },
  ]
  export default function SKILLS() {
    return (
<div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8" id="skills-section">
      <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
      <div className="mt-6 pt-10">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
      </div>
    </div>
    )
}