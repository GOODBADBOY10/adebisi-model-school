export default function DepartmentContact() {
    const departments = [
        { name: "Admissions", email: "admissions@mysite.com" },
        { name: "Support", email: "support@mysite.com" },
        { name: "Careers", email: "careers@mysite.com" },
    ];

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Department Contacts
                </h2>
                <ul className="space-y-4">
                    {departments.map((dept, index) => (
                        <li key={index} className="bg-white shadow p-4 rounded-md">
                            <h3 className="font-semibold">{dept.name}</h3>
                            <p className="text-gray-600">{dept.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
