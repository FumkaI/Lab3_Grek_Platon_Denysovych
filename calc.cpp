#include <iostream>
using namespace std;
int main() {
	int a, b, op; double result;
	cout << "¬вед≥ть перше число\n"; cin >> a;
	cout << "¬вед≥ть оператор\n1\t+\n2\t-\n3\t*\n4\t/\n\n"; cin
		>> op;
	cout << "¬вед≥ть друге число\n"; cin >> b;
	switch (op) {
	case 1:
		result = a + b;
		break;
	case 2:
		result = a - b;
		break;
	case 3:
		result = a * b;
		break;
	case 4: // code
		break;
	}
	cout << "–езультат = " << result;
}