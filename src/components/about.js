export default function AboutMe() {

    return (
    <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8" id="about-me-section">
    <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
    <div className="mt-6 pt-10">
    <div className="bg-white overflow-hidden">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">General Information</h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details about me</p>
  </div>
  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Full name</dt>
        <dd className="mt-1 text-sm text-gray-900">Jacob Kyed Andreassen</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Location</dt>
        <dd className="mt-1 text-sm text-gray-900">Denmark, Aalborg</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Age</dt>
        <dd className="mt-1 text-sm text-gray-900">21 years old</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Hobbies</dt>
        <dd className="mt-1 text-sm text-gray-900">Software developing</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-sm font-medium text-gray-500">About</dt>
        <dd className="mt-1 text-sm text-gray-900">
        I'm Jacob, a 21 year old male studying Computer Science at Aalborg University. I'm an upcomming developer.
        I have an ambition to expand my understanding in developing. My plan is to gain knowledge about several coding languages.
        In my freetime I like to fiddle with programming and expanding  my horizon with different kinds of new skills.
        </dd>
      </div>
    </dl>
  </div>
</div>
</div>
</div>
    )
}