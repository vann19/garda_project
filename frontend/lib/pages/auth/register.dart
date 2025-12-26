import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  String message = "Hello World";

  void changeMessage() {
    setState(() {
      message = "Hello World 👋 Register Page";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Register")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Text berubah (state)
            Text(
              message,
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),

            const SizedBox(height: 20),

            // Button ubah state
            ElevatedButton(
              onPressed: changeMessage,
              child: const Text("Klik Register"),
            ),
          ],
        ),
      ),
    );
  }
}
