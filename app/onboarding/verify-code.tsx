import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import ButtonF from "@/components/stylesFunny/ButtonF";

const VerifyCodeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const [codeActive, setCodeActive] = useState(true);
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState<string[]>(Array(4).fill(""));

  // Create refs for each TextInput
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (codeActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCodeActive(false);
    }
    return () => clearInterval(interval);
  }, [codeActive, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move focus to the next input if text is entered and not the last input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.header__title}>Xác thực số điện thoại</Text>
        <Text style={styles.header__subtitle}>
          Nhập mã 4 chữ số đã được gửi đến bạn
        </Text>
        <Text style={styles.header__phoneNumber}>0868680111</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Code Input Section */}
        <View style={styles.codeContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.codeBox,
                index === 0 && value === "" && styles["codeBox--focused"],
              ]}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          ))}
        </View>

        {/* Resend Action */}
        <TouchableOpacity
          disabled={timer > 0}
          onPress={() => {
            setTimer(20);
            setCodeActive(true);
          }}
        >
          <Text
            style={[
              styles.resendText,
              timer > 0 && styles["resendText--disabled"],
            ]}
          >
            Tôi chưa nhận được mã ({formatTime(timer)})
          </Text>
        </TouchableOpacity>

        {/* Next Button */}
        <ButtonF
          bgColor="#66E1FF"
          theme="secondary"
          onPress={() => router.push("/booking/move/moveScreen")}
          title="Tiếp tục"
          style={{ width: "100%" }}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal__overlay}>
          <View style={styles.modal__content}>
            <TouchableOpacity
              style={styles.modal__resendButton}
              onPress={() => {
                setModalVisible(false);
                setTimer(60);
                setCodeActive(true);
              }}
            >
              <Text style={styles.modal__resendButtonText}>
                Gửi lại mã qua SMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal__cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modal__cancelButtonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  header__title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  header__subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 8,
  },
  header__phoneNumber: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000000",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  codeBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 8,
  },
  "codeBox--focused": {
    borderColor: "#66E1FF",
  },
  resendText: {
    fontSize: 14,
    color: "#66E1FF",
    textAlign: "center",
    marginBottom: 20,
  },
  "resendText--disabled": {
    color: "#999999",
  },
  modal__overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modal__content: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modal__resendButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  modal__resendButtonText: {
    fontSize: 16,
    color: "#66E1FF",
    textAlign: "center",
  },
  modal__cancelButton: {
    padding: 15,
  },
  modal__cancelButtonText: {
    fontSize: 16,
    color: "#FF3B30",
    textAlign: "center",
  },
});

export default VerifyCodeScreen; 