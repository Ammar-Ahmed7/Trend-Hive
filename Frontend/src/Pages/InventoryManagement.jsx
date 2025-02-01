/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Table, Input, Button, Modal, Form } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    // Fetch inventory data (Replace with API call)
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Laptop", quantity: 10, price: 1200 },
        { id: 2, name: "Mouse", quantity: 50, price: 25 },
        { id: 3, name: "Keyboard", quantity: 30, price: 45 },
      ];
      setInventory(data);
      setFilteredInventory(data);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    setFilteredInventory(
      inventory.filter((item) =>
        item.name.toLowerCase().includes(value)
      )
    );
  };

  const handleAddOrUpdate = (values) => {
    if (editingItem) {
      const updatedInventory = inventory.map((item) =>
        item.id === editingItem.id ? { ...item, ...values } : item
      );
      setInventory(updatedInventory);
      setFilteredInventory(updatedInventory);
    } else {
      const newItem = {
        id: inventory.length + 1,
        ...values,
      };
      setInventory([...inventory, newItem]);
      setFilteredInventory([...inventory, newItem]);
    }
    setModalVisible(false);
    form.resetFields();
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    form.setFieldsValue(item);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    const updatedInventory = inventory.filter((item) => item.id !== id);
    setInventory(updatedInventory);
    setFilteredInventory(updatedInventory);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Inventory Management</h2>
      <Input
        placeholder="Search items..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: "10px", width: "100%" }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setEditingItem(null);
          form.resetFields();
          setModalVisible(true);
        }}
        style={{ marginBottom: "10px" }}
      >
        Add Item
      </Button>
      <Table
        dataSource={filteredInventory}
        rowKey="id"
        columns={[
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Quantity", dataIndex: "quantity", key: "quantity" },
          { title: "Price ($)", dataIndex: "price", key: "price" },
          {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
              <>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(record)}
                  style={{ marginRight: "10px" }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => handleDelete(record.id)}
                />
              </>
            ),
          },
        ]}
      />

      <Modal
        title={editingItem ? "Edit Item" : "Add Item"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddOrUpdate}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter item name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: "Please enter quantity" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InventoryManagement;
